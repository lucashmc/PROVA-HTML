let totalGastos = 0;

document.getElementById('adicionarGasto').addEventListener('click', () => {
    const valorInput = document.getElementById('valor');
    const descricaoInput = document.getElementById('descricao');
    const categoriaSelect = document.getElementById('categoria');
    const valor = parseFloat(valorInput.value);
    const descricao = descricaoInput.value;
    const categoria = categoriaSelect.value;

    if (!isNaN(valor) && valor > 0 && descricao.trim() !== '') {
        totalGastos += valor;
        document.getElementById('totalGastos').textContent = `Total: R$ ${totalGastos.toFixed(2)}`;

       
        const tabelaBody = document.getElementById('tabelaGastos').getElementsByTagName('tbody')[0];
        const novaLinha = tabelaBody.insertRow();

        const celulaCategoria = novaLinha.insertCell(0);
        const celulaDescricao = novaLinha.insertCell(1);
        const celulaValor = novaLinha.insertCell(2);

        celulaCategoria.textContent = categoria;
        celulaDescricao.textContent = descricao;
        celulaValor.textContent = `R$ ${valor.toFixed(2)}`;

       
        valorInput.value = '';
        descricaoInput.value = '';
    } else {
        alert('Por favor, insira uma descrição e um valor válido.');
    }
});