import Livro from '../modelo/Livros';

class ControleLivros {
  private livros: Array<Livro>;

  constructor() {
    this.livros = [
      { codigo: 1,
        codEditora: 1,
        titulo: 'Segredos do Lugar Secreto',
        resumo: 'Encontre as chaves para reacender o desejo de buscar a Deus. É possível ter acesso imediato à presença do Pai. O conhecimento dessa verdade libera nosso espírito para alçar voos inimagináveis ao abrigo do Altíssimo, onde Ele nos espera de braços abertos.',
        autores: ['Bob Sorge'] },
      { codigo: 2,
        codEditora: 2,
        titulo: 'Invisível',
        resumo: 'O livro Invisível mostra a riqueza que é estar escondido em Deus - consumindo todos os nossos recursos, nosso tempo e nós mesmo. Apenas pelo amor amor a Deus, e nos mostra a alegria que é estar perante a Deus e desfrutar da felicidade que é estar em um relacionamento com Deus.',
        autores: ['Sara Hagerty'] },
      { codigo: 3,
        codEditora: 3,
        titulo: 'Nuvem de Glória',
        resumo: 'ssa nuvem de glória, descrita incontáveis vezes ao longo das Escrituras, é a que a Igreja precisa aprender a desenvolver sensibilidade se quiser avançar no sobrenatural.',
        autores: ['Teófilo Hayashi','Sarah Hayashi'] },
    ];
  }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map((livro) => livro.codigo)) + 1;
    novoLivro.codigo = novoCodigo;
    
    this.livros.push(novoLivro);
  }

  excluir(codigoLivro: number): void {
    const indiceLivro = this.livros.findIndex((livro) => livro.codigo === codigoLivro);

    if (indiceLivro !== -1) {
      this.livros.splice(indiceLivro, 1);
    }
  }
}

export default ControleLivros;
