type FintocWidget = {
  open: () => void
  close: () => void
  destroy: () => void
}

type Fintoc = {
  create: (arg: any) => FintocWidget
}

interface FintocWindow extends Window {
  Fintoc: Fintoc
}
