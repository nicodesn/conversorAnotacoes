const textarea = document.querySelector('textarea'),
fileName = document.querySelector('.fileName input'),
selecione = document.querySelector('.selectOpnion select'),
btnSaveAs = document.querySelector('.btnSaveAs')


selecione.addEventListener('change', () => {

    // Vai selecionar o tipo de arquivo selecionado no botão salvar como 
    let selectOp = selecione.options[selecione.selectedIndex].text;
    btnSaveAs.innerText = `Salvar como Ficheiro ${selectOp.split(' ')[0]}`
})
btnSaveAs.addEventListener('click', () =>{
    const blob = new Blob ([textarea.value], {type: selecione.value}); 
    // vai cria uma url que representa o objeto passado
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement('a'); // vai criar uma a que no html é um link
    link.download = fileName.value; // vai passar o nome do arquivo como valor de download
    link.href = fileUrl; // vai passar a url do ficheiro como valor href no link
    link.click(); // clicando para baixar o arquivo
})