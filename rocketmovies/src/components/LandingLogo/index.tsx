interface Props {
  welcomeText: string;
}

export const LandingLogo: React.FC<Props> = ({ welcomeText }) => {
  return (
    <div className="px-4 text-left">
      <h1 className="text-rose-400 font-bold pb-2">RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>
      <h3 className="my-12 text-2xl font-medium">{welcomeText}</h3>
    </div>
  );
};
