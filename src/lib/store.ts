/* eslint-disable no-unused-vars */
import { WebBundlr } from "@bundlr-network/client";
import { BUNDLR_CURRENCY, BUNDLR_NODE_URL } from "@utils/constants";
import { FetchSignerResult } from "@wagmi/core";
import { Profile } from "src/types";
import create from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  token: { access: string | null; refresh: string | null };
  channels: Profile[] | [];
  recommendedChannels: Profile[] | [];
  selectedChannel: Profile | null;
  showCreateChannel: boolean;
  notificationCount: number;
  hasNewNotification: boolean;
  selectPodUrl: string | null;
  setToken: (token: { access: string | null; refresh: string | null }) => void;
  setShowCreateChannel: (showCreateChannel: boolean) => void;
  setSelectedChannel: (profile: Profile | null) => void;
  setChannels: (channels: Profile[]) => void;
  setRecommendedChannels: (channels: Profile[]) => void;
  setNotificationCount: (count: number) => void;
  setHasNewNotification: (value: boolean) => void;
  setSelectedPodUrl: (value: string | null) => void;
  getBundlrInstance: (signer: FetchSignerResult) => Promise<WebBundlr>;
}
export const ALCHEMY_KEY = process.env.NEXT_PUBLIC_ALCHEMY_KEY;

export const useAppStore = create(
  persist<AppState>(
    (set, _get) => ({
      channels: [],
      recommendedChannels: [],
      selectedChannel: null,
      showCreateChannel: false,
      notificationCount: 0,
      hasNewNotification: false,
      selectPodUrl: null,
      setHasNewNotification: (b) => set(() => ({ hasNewNotification: b })),
      token: { access: null, refresh: null },
      setSelectedChannel: (channel) =>
        set(() => ({ selectedChannel: channel })),
      setToken: (token) => set(() => ({ token })),
      setNotificationCount: (notificationCount) =>
        set(() => ({ notificationCount })),
      setChannels: (channels) => set(() => ({ channels })),
      setRecommendedChannels: (recommendedChannels) =>
        set(() => ({ recommendedChannels })),
      setShowCreateChannel: (showCreateChannel) =>
        set(() => ({ showCreateChannel })),
      setSelectedPodUrl: (selectPodUrl) => set(() => ({ selectPodUrl })),
      getBundlrInstance: async (signer) => {
        const bundlr = new WebBundlr(
          BUNDLR_NODE_URL,
          BUNDLR_CURRENCY,
          signer?.provider,
          {
            providerUrl: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_KEY}`,
          }
        );
        await bundlr.utils.getBundlerAddress(BUNDLR_CURRENCY);
        await bundlr.ready();
        return bundlr;
      },
    }),
    {
      name: "app-storage",
    }
  )
);

export default useAppStore;
