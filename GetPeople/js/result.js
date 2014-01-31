/*
---------------------------------------------------------------------------------------------------------------------
----------------------------------------------DADOS RETIRADOS DAS FONTES---------------------------------------------
---------------------------------------------------------------------------------------------------------------------
http://noticias.uol.com.br/cotidiano/ultimas-noticias/2012/09/21/numero-de-solteiros-cresce-e-ultrapassa-o-de-casados-no-pais-aponta-ibge.htm
http://noticias.r7.com/internacional/noticias/mundo-tem-57-milhoes-de-homens-a-mais-que-mulheres-20101020.html
http://noticias.uol.com.br/internacional/ultimas-noticias/2010/10/20/onu-contabiliza-57-milhoes-de-homens-a-mais-do-que-mulheres-no-mundo.htm (107 homens para cada 100 mulheres.)


Este � um app que te mostra uma porcentagem de chance que voc� tem de pegar uma mulher e/ou homem, em qualquer evento.
Ele leva em considera��o fatores como:
Quantidade de Homens 													=> Valor de entrada
Quantidade de Mulheres 													=> Valor de entrada
Porcentagem de casais 													=> 39,9%
Porcentagem de pessoas �sexuadas ou que n�o praticam rela��es sexuais 	=> 12%
Porcentagem de pessoas solteiras 										=> 48,1%
Solteiros homens 														=> 52.3%
Solteiras mulheres 														=> 47.7%
---------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------DADOS REAIS---------------------------------------------------
---------------------------------------------------------------------------------------------------------------------
*/
function calculaProbabilidadeDeChances(sexo,qtdHomens,qtdMulheres)
{
	//Inicializando as vari�veis
	var qtdPessoasPorSexo;
	var porcentagemPessoasDisponiveis;
	var resutadoFinal;


	//Verifica qual � o sexo da pessoa, para fazer as somas matem�ticas
	if(sexo == "M")
	{
		//Descobrindo a quantidade de homens por mulheres
		qtdPessoasPorSexo = qtdHomens / qtdMulheres;


		//Com base nos dados informados, calculando a porcentagem pessoas que (poss�velmente) est�o disponiveis
		porcentagemPessoasDisponiveis = (qtdHomens / 100 ) * 47.7;


		//Calculando a porcentagem final, baseado na quantidade de pessoas disponiveis para cada sexo
		resutadoFinal = parseFloat(porcentagemPessoasDisponiveis - qtdPessoasPorSexo);
		
	}
	else
	{
		//Descobrindo a quantidade de homens por mulheres
		qtdPessoasPorSexo = qtdMulheres / qtdHomens;


		//Com base nos dados informados, calculando a porcentagem pessoas que (poss�velmente) est�o disponiveis
		porcentagemPessoasDisponiveis = (qtdMulheres / 100 ) * 52.3;


		//Calculando a porcentagem final, baseado na quantidade de pessoas disponiveis para cada sexo
		resutadoFinal = parseFloat(porcentagemPessoasDisponiveis - qtdPessoasPorSexo);
	}


	//Em determinadas citua��es as chances do infeliz pode ser negativa ou maior que 100. (Claro, que depende dos n�meros informados). Neste caso, arrendamos os valores ou para 0% ou para 100%
	if(resutadoFinal > 100){resutadoFinal = 100;}else if(resutadoFinal < 0){resutadoFinal = 0;}

	//Retornando o resultado final
	return resutadoFinal;
}