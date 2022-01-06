import { useEffect, useState } from 'react';
import { getFintocObject } from '~/core';

export async function FintocButton(props: {}) {
  const [widget, setWidget] = useState<FintocWidget|null>(null);

  const onClick = () => {
    if (!widget) {
      throw Error('Error mounting the Fintoc widget');
    } else {
      widget.open();
    }
  };

  useEffect(() => {
    async function createWidget() {
      const Fintoc = await getFintocObject();
      setWidget(Fintoc.create(props));
    }

    createWidget();
  }, []);

  return (
    <button onClick={onClick}>
      Usa Fintoc!
    </button>
  )
}
