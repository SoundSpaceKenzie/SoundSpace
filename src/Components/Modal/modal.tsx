import { useState } from "react";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  return (
    <>
      {modalOpen ? (
        <div>
          <div className="main__container">
            <form className="form__new">
              <h1 className="title__form">Cadastrar Post</h1>
              <button className="close__button" onClick={() => setModalOpen(false)}> X </button>

              <label> Url vindo do: </label>
              <select>
                <option value="Spotify"> Spotify </option>
                <option value="YouTube"> YouTube </option>
              </select>

              <label> Link URL: </label>
              <input type="url" name="url" id="url" placeholder="Digite aqui a URL da plataforma escolhida..." />

              <label> Descrição: </label>
              <textarea value={text} onChange={handleChange} id="description" placeholder="Digite aqui sua descrição..." />

              <button className="button__send" > Postar </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
