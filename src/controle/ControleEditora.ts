import Editora from '../modelo/Editora';

class ControleEditora {
  private editoras: Array<Editora>;

  constructor() {
    this.editoras = [
      { codEditora: 1, nome: 'Atos' },
      { codEditora: 2, nome: 'Impacto' },
      { codEditora: 3, nome: 'Quatro Ventos' },
    ];
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.find((editora) => editora.codEditora === codEditora);

    return editoraEncontrada?.nome;
  }
}

export default ControleEditora;
