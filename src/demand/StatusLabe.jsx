import { Label } from "./Label";

export function StatusLabel({ status }) {
  if (status === "open")
    return <Label color="white" text="Em aberto" background="#999" />;
  if (status === "solved")
    return <Label color="#1FA161" text="Resolvido" background="#CAF4E0" />;
  if (status === "refused")
    return <Label color="#AD413F" text="Recusado" background="#F8D4D4" />;
}
