import { useCallback, useEffect, useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const {isLoading, isError, data} = useQuery({queryFn: () => fetch('https://api.example.com/data').then(res => res.json())})

  useEffect(() => {
    if (isError) {
      console.error("Erro ao buscar dados:", isError);
    }
  }, [isError]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  const handleToggle = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    console.log("Componente montado ou atualizado");
  });

  useEffect(() => { 
    console.log("Componente montado");
  }, []);

  return (
    <div>
      <input type="submit" onClick={() => handleToggle()} />
      
      {isVisible && (
        <div>
          <h1>
            Ta visível!
          </h1>
        </div>
      )}
    </div>
  )
}
