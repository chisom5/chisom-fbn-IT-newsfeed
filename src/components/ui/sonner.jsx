import { Toaster as Sonner } from 'sonner'

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[#4B48FF] group-[.toaster]:text-white group-[.toaster]:border-[#4B48FF] group-[.toaster]:shadow-lg',
          title: 'group-[.toast]:text-white group-[.toast]:font-medium',
          description: 'group-[.toast]:text-white/10',
          actionButton: 'group-[.toast]:bg-white group-[.toast]:text-[#4B48FF]',
          cancelButton: 'group-[.toast]:bg-white/20 group-[.toast]:text-white',
          icon: 'group-[.toast]:text-white',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }