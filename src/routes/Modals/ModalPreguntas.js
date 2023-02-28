import React from "react";
import cerrar from "../../assets/cerrar.png";
import "./estiloModalPreguntas.css";
import nave from "../../assets/NuevaNave.png";

const ModalPreguntas = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay2">
      <p
        className="closeBtn w-[40px] h-[40px] cursor-pointer hover:scale-125"
        onClick={onClose}
      >
        <img src={cerrar} />
      </p>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="w-full">
          <div className=" md:gap-6">
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form>
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                  <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <h2>
                      ¡Hola! envía tu pregunta de la forma más clara posible.
                    </h2>
                    <h1 className="text-2xl text-gray-700 font-bold">
                      ¿Tienes alguna pregunta sobre la certificación BANG?
                    </h1>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="company-website"
                          className="block font-bold text-gray-700"
                        >
                          Correo
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="company-website"
                            id="company-website"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="ejemplo@gmail.com.co"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="select-numeros"
                      >
                        Pregunta sobre...
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="select-numeros"
                      >
                        <option value="">Bang Intraemprendedor</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="about"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Escribe tu pregunta
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Pregunta"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPreguntas;
