import clsx from "clsx";
import { ComponentProps, forwardRef, ReactNode, useId } from "react";
import { FiHelpCircle } from "react-icons/fi";

import { FieldError } from "./Form";
import Tooltip from "./Tooltip";

interface Props extends Omit<ComponentProps<"textarea">, "prefix"> {
  label?: string;
  prefix?: string | ReactNode;
  className?: string;
  helpText?: string;
  error?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(function Input(
  { label, prefix, error, className = "", helpText, ...props },
  ref
) {
  const id = useId();

  return (
    <label className="w-full" htmlFor={id}>
      {label && (
        <div className="flex items-center mb-1 space-x-1.5">
          <div className="text-[11px] font-semibold uppercase opacity-70">
            {label}
          </div>
          {helpText && (
            <Tooltip content={helpText}>
              <FiHelpCircle />
            </Tooltip>
          )}
        </div>
      )}
      <div className="flex">
        {prefix && (
          <span className="inline-flex items-center px-2 text-gray-500 border border-r-0 border-gray-200 rounded-l-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
            {prefix}
          </span>
        )}
        <textarea
          id={id}
          className={clsx(
            { "!border-red-500 placeholder-red-500": error },
            { "rounded-r-lg": prefix },
            { "rounded-lg": !prefix },
            "bg-white text-sm px-2.5 py-1.5 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 disabled:opacity-60 disabled:bg-gray-500 disabled:bg-opacity-20 outline-none w-full",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
      {props.name && <FieldError name={props.name} />}
    </label>
  );
});
