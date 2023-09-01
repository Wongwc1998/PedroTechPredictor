import BackButton from "@/components/BackButton";

interface Params {
  params: {
    name: string;
  };
}

const getGenderData = async (name: string) => {
  const gender = await fetch(`https://api.genderize.io/?name=${name}`);
  return gender.json();
};

const getNationData = async (name: string) => {
  const nation = await fetch(`https://api.nationalize.io/?name=${name}`);
  return nation.json();
};

const getAgeData = async (name: string) => {
  const age = await fetch(`https://api.agify.io/?name=${name}`);
  return age.json();
};

export default async function PredictionName({ params }: Params) {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const [gender, nation, age] = await Promise.all([
    getGenderData(params.name),
    getNationData(params.name),
    getAgeData(params.name),
  ]);
  return (
    <div className="bg-slate-50 rounded-lg text-slate-800 font-bold my-10 mx-20 p-10 gap-1 flex flex-col">
      <div className="text-sky-500 uppercase">Personal Info</div>
      <div>Age: {age?.age}</div>
      <div className="capitalize">Gender: {gender?.gender}</div>
      <div>Nationality: {regionNames.of(nation?.country[0]?.country_id)}</div>
      <BackButton />
    </div>
  );
}
