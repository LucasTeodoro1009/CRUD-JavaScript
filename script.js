// Classe que representa um Usuário
class Usuario {
    constructor(nome, dataNascimento, telefone, email) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.telefone = telefone;
        this.email = email;
    }
}

// Classe que atua como uma fábrica para criar usuários
class UsuarioFactory {
    static criarUsuario(nome, dataNascimento, telefone, email) {
        return new Usuario(nome, dataNascimento, telefone, email);
    }
}

// Função para carregar usuários do localStorage
const carregarUsuarios = () => {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
};

// Função para salvar usuários no localStorage
const salvarUsuarios = (usuarios) => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
};

// Função para renderizar a tabela de usuários
const renderizarUsuarios = (usuarios, corpoTabelaUsuario) => {
    corpoTabelaUsuario.innerHTML = ''; // Limpa a tabela antes de renderizar os dados

    usuarios.forEach((usuario, indice) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.dataNascimento}</td>
            <td>${usuario.telefone}</td>
            <td>${usuario.email}</td>
            <td class="acoes-usuario">
                <button class="editar" onclick="editarUsuario(${indice})">Editar</button>
                <button class="deletar" onclick="deletarUsuario(${indice})">Deletar</button>
            </td>
        `;
        corpoTabelaUsuario.appendChild(linha);
    });
};

// Função para adicionar ou atualizar um usuário
const salvarUsuario = (usuario, indiceEdicao) => {
    const usuarios = carregarUsuarios();

    if (indiceEdicao === -1) {
        // Adiciona um novo usuário
        usuarios.push(usuario);
    } else {
        // Atualiza um usuário existente
        usuarios[indiceEdicao] = usuario;
    }

    salvarUsuarios(usuarios); // Salva a lista de usuários no localStorage
    renderizarUsuarios(usuarios, document.getElementById('corpoTabelaUsuario')); // Atualiza a tabela de usuários
    document.getElementById('formularioUsuario').reset(); // Reseta o formulário
};

// Função para editar um usuário
window.editarUsuario = (indice) => {
    const usuarios = carregarUsuarios();
    const usuario = usuarios[indice];

    document.getElementById('nome').value = usuario.nome;
    document.getElementById('dataNascimento').value = usuario.dataNascimento;
    document.getElementById('telefone').value = usuario.telefone;
    document.getElementById('email').value = usuario.email;

    document.getElementById('indiceEdicao').value = indice; // Define o índice do usuário em edição
};

// Função para deletar um usuário
window.deletarUsuario = (indice) => {
    const usuarios = carregarUsuarios();
    usuarios.splice(indice, 1); // Remove o usuário do array

    salvarUsuarios(usuarios); // Salva a lista de usuários atualizada no localStorage
    renderizarUsuarios(usuarios, document.getElementById('corpoTabelaUsuario')); // Atualiza a tabela de usuários
};

// Função principal para inicializar a aplicação
document.addEventListener('DOMContentLoaded', () => {
    const formularioUsuario = document.getElementById('formularioUsuario');
    const corpoTabelaUsuario = document.getElementById('corpoTabelaUsuario');

    // Carrega e renderiza a lista de usuários ao carregar a página
    renderizarUsuarios(carregarUsuarios(), corpoTabelaUsuario);

    // Adiciona o evento de submit ao formulário de usuário
    formularioUsuario.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        // Obtém os valores do formulário
        const nome = document.getElementById('nome').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const indiceEdicao = document.getElementById('indiceEdicao').value || -1;

        // Cria um novo usuário usando a fábrica de usuários
        const usuario = UsuarioFactory.criarUsuario(nome, dataNascimento, telefone, email);

        // Salva o usuário (adiciona ou atualiza)
        salvarUsuario(usuario, parseInt(indiceEdicao));
    });
});
