import type {
  ProfileInterestsRequest,
  ProfileInterestTypes
} from '@tape.xyz/lens'

import useProfileStore from '@lib/store/idb/profile'
import { EVENTS, sanitizeProfileInterests, Tower } from '@tape.xyz/generic'
import {
  useAddProfileInterestsMutation,
  useProfileInterestsOptionsQuery,
  useRemoveProfileInterestsMutation
} from '@tape.xyz/lens'
import { useApolloClient } from '@tape.xyz/lens/apollo'
import { Loader } from '@tape.xyz/ui'
import clsx from 'clsx'
import React, { useEffect } from 'react'

const MAX_TOPICS_ALLOWED = 12

const Topics = () => {
  const activeProfile = useProfileStore((state) => state.activeProfile)

  useEffect(() => {
    Tower.track(EVENTS.PROFILE_INTERESTS.VIEW)
  }, [])

  const { cache } = useApolloClient()
  const { data, loading } = useProfileInterestsOptionsQuery({
    skip: !activeProfile?.id,
    variables: { request: { forProfileId: activeProfile?.id } }
  })
  const [addProfileInterests] = useAddProfileInterestsMutation()
  const [removeProfileInterests] = useRemoveProfileInterestsMutation()

  const updateCache = (interests: string[]) => {
    cache.modify({
      fields: { interests: () => interests },
      id: `Profile:${activeProfile?.id}`
    })
  }

  const interestsData = data?.profileInterestsOptions as ProfileInterestTypes[]
  const selectedTopics = data?.profile?.interests ?? []

  const onSelectTopic = (topic: ProfileInterestTypes) => {
    try {
      const request: ProfileInterestsRequest = {
        interests: [topic]
      }
      if (!selectedTopics?.includes(topic)) {
        const interests = [...selectedTopics, topic]
        updateCache(interests)
        Tower.track(EVENTS.PROFILE_INTERESTS.ADD)
        return addProfileInterests({ variables: { request } })
      }
      const topics = [...selectedTopics]
      topics.splice(topics.indexOf(topic), 1)
      updateCache(topics)
      Tower.track(EVENTS.PROFILE_INTERESTS.REMOVE)
      removeProfileInterests({ variables: { request } })
    } catch {}
  }

  return (
    <div className="flex flex-col space-y-3">
      {loading && <Loader className="my-10" />}
      {sanitizeProfileInterests(interestsData)?.map(
        ({ category, subCategories }) => (
          <div className="w-full space-y-2" key={category.id}>
            <h2 className="text-sm font-bold capitalize">{category.label}</h2>
            <div className="flex flex-wrap items-center gap-2">
              <button
                className={clsx(
                  'tape-border flex items-center justify-between rounded-md px-3 py-0.5 text-sm capitalize focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                  {
                    '!border-brand-500 text-brand-500': selectedTopics.includes(
                      category.id
                    )
                  }
                )}
                disabled={
                  !selectedTopics.includes(category.id) &&
                  selectedTopics.length === MAX_TOPICS_ALLOWED
                }
                onClick={() => onSelectTopic(category.id)}
                type="button"
              >
                {category.label}
              </button>
              {subCategories?.map(
                (subCategory: { id: ProfileInterestTypes; label: string }) => (
                  <button
                    className={clsx(
                      'tape-border flex items-center justify-between rounded-md px-3 py-0.5 text-sm capitalize focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                      {
                        '!border-brand-500 text-brand-500':
                          selectedTopics.includes(subCategory.id)
                      }
                    )}
                    disabled={
                      !selectedTopics.includes(subCategory.id) &&
                      selectedTopics.length === MAX_TOPICS_ALLOWED
                    }
                    key={subCategory.id}
                    onClick={() => onSelectTopic(subCategory.id)}
                    type="button"
                  >
                    {subCategory.label}
                  </button>
                )
              )}
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default Topics
