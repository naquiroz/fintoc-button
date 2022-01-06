type FintocWidget = {
  open: () => void
  close: () => void
  destroy: () => void
}

type Fintoc = {
  create: (arg: {}) => FintocWidget
}

interface FintocDocument extends Document {
  Fintoc: Fintoc
}
