import SafeEnvironment from "ui/components/feedback/SafeEnviorment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={"Preencha seu endereço e veja todos os profissionais"}
      />

      <UserInformation
        name={"Eduardo"}
        picture={"https://github.com/EduardoCostaEXE.png"}
        rating={5}
        description={"São José dos Campos"}
      />
    </div>
  );
}
