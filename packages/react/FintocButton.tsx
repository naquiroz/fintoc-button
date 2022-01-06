import { getFintocObject } from "~/core";

export async function FintocButton(props: {}) {
  const Fintoc = await getFintocObject(); // ESTO VA ACÁ O EN EL ON MOUNT????
  const [widget, setWidget] = useState(null);

  const onClick = () => {
    if (!widget) {
      console.log('F');
    } else {
      widget.open();
    }
  };

  onMount(() => {
    setWidget(Fintoc.create(props));
  });

  return (
    <button click={onClick}>
      Usa Fintoc!
    </button>
  )
}
