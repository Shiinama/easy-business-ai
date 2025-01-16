import { cn } from '@/lib/utils'

import { CopyButton } from './copy-button'

export const CodeBlock = ({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
  return (
    <div className="relative rounded-xl font-mono text-sm">
      <div className="absolute right-3 top-3 z-10">
        <CopyButton>{children}</CopyButton>
      </div>
      <div className="w-full p-[2px]">
        <pre className={cn('overflow-x-auto rounded-md py-4 font-mono', className)} {...props}>
          <code>{children}</code>
        </pre>
      </div>
    </div>
  )
}
