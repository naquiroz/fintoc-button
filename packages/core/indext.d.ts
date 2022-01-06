type FintocWidget = {
  open: () => void
  close: () => void
  destroy: () => void
}

type Fintoc = {
  create: (arg: any) => FintocWidget
}

interface FintocDocument extends Document {
  Fintoc: Fintoc
}
