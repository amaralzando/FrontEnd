import { Link } from 'react-router-dom';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

import ErroPng from "../assets/Erro.png";

function Error() {
  const error = useRouteError();
  
  if (isRouteErrorResponse(error)) {
    console.log(error.status)
    if (error.status === 404) {
      return (
        <>
          <div className='h-screen flex flex-col items-center justify-center space-y-5'>
            <img src={ErroPng} />
            <h1 className='text-3xl font-bold '>404 : A página não foi encontrada</h1>
            <p className='text-lg'>Você selecionou uma rota obscura ou veio aqui por engano. Seja qual for, aperte o botão para voltar para Home</p>
            <Link 
                className='bg-blue-700 hover:bg-blue-800 p-2 rounded-xl text-white font-bold shadow-2xl'
                to="/" >
                    Voltar para Home
            </Link>
          </div>
        </>
      );
    }

    if (error.status === 401) {
      return (
        <>
          <div className='h-screen flex flex-col items-center justify-center space-y-5'>
              <img src={ErroPng} />
              <h1 className='text-3xl font-bold '>401 : Você não está autorizado a ver isso</h1>
              <p className='text-lg'>Sem acesso a essa funcionalidade</p>
              <Link 
                  className='bg-blue-700 hover:bg-blue-800 p-2 rounded-xl text-white font-bold shadow-2xl'
                  to="/" >
                      Voltar para Home
              </Link>
          </div>
        </>
      );
    }

    if (error.status === 503) {
      return (
        <>
            <div className='h-screen flex flex-col items-center justify-center space-y-5'>
                <img src={ErroPng} />
                <h1 className='text-3xl font-bold '>503 : Parece que nossa API está inoperante</h1>
                <p className='text-lg'>Api está com mal funcionamento</p>
                <Link 
                    className='bg-blue-700 hover:bg-blue-800 p-2 rounded-xl text-white font-bold shadow-2xl'
                    to="/" >
                        Voltar para Home
                </Link>
            </div>
        </>
      );
    }

    if (error.status === 418) {
      return (
        <>
            <div className='h-screen flex flex-col items-center justify-center space-y-5'>
                <img src={ErroPng} />
                <h1 className='text-3xl font-bold '>418 : Isso é um erro</h1>
                <p className='text-lg'>O url de solicitação /does_not_exist não foi encontrado neste servidor, como sabemos</p>
                <Link 
                    className='bg-blue-700 hover:bg-blue-800 p-2 rounded-xl text-white font-bold shadow-2xl'
                    to="/" >
                        Voltar para Home
                </Link>
            </div>
        </>
      );
    }
  }
  
  return (
    <>
        <div className='h-screen flex flex-col items-center justify-center space-y-5'>
            <img src={ErroPng} />
            <h1 className='text-3xl font-bold '>Algo deu errado</h1>
            <p className='text-lg'>Informe o administrador do sistema</p>
            <Link 
                className='bg-blue-700 hover:bg-blue-800 p-2 rounded-xl text-white font-bold shadow-2xl'
                to="/" >
                    Voltar para Home
            </Link>
        </div>
    </>
  );
}

export default Error;