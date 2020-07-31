import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }    
    const [values, setValues] = useState(valoresIniciais);
    const [categorias, setCategorias] = useState([]);



    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,
        })
    }
    function handleChange(infosDoEvento){
        const {getAttribute, value} = infosDoEvento.target;
        setValue(getAttribute('name'), 
        value
        );
    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                console.log('Tentativa de envio de formulário')
                setCategorias ([
                    ...categorias,
                    values.nome
            ]);
            setValues({})
            }}>
    <FormField 
        label="Nome da Categoria"
        name="nome"
        type="text"
        value={values.nome}
        onChange={handleChange}
    />
    <div>
        <label>
        Descrição:
            <input
            type="text"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
            />
        </label>
    </div>
    <FormField 
        label="Cor"
        name="cor"
        type="color"
        value={values.cor}
        onChange={handleChange}
    />
    {/*<div>
        <label>
        Cor:
        <input
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
            />
        </label>
    </div>*/}
            <button>
            Cadastrar
            </button>
            </form>
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;