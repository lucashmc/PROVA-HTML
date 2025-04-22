let totalGastos = 0;

document.getElementById('adicionarGasto').addEventListener('click', () => {
    const valorInput = document.getElementById('valor');
    const valor = parseFloat(valorInput.value);

    if (!isNaN(valor) && valor > 0) {
        totalGastos += valor;
        document.getElementById('totalGastos').textContent = `Total: R$ ${totalGastos.toFixed(2)}`;
        valorInput.value = ''; // 
    } else {
        alert('Por favor, insira um valor válido.');
    }
});