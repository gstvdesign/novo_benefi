import React from "react"
import Header from "../components/header"
import Article from "../components/article"
import clientStyles from "./client.module.css"
import Container from "../components/container"

const Client = props => (
	<div>
		<div className={clientStyles.client}>
			<h2 className={clientStyles.name}>{props.name}</h2>
			<img src={props.img} alt="" />
		</div>
		<Article>
			<p>{props.job}</p>
			<a href={props.link}>Confira o site</a>
		</Article>
	</div>
)

export default () => (
	<Container>
		<Article>
			<Header />
		</Article>

		<h1 className="shine">Clientes que estão virando o jogo</h1>
		<Client
			name="Eirene"
			img="/sites/eirene.png"
			job="Trabalhando juntos desde 2009, esse é terceiro site construído para o Eirene. Esse site tem a função simples de facilitar a demonstração de interesse de um possível aluno nos cursos da instituição.
					 Para isso a $Name reescreveu todos os textos descritivos dos cursos para torná-los mais promocionais e se conectarem melhor com o público alvo. Depois foram criados chamadas para ação que levam a formulários que pedem o nome e email do possível aluno."
			link="http://eirene.com.br"
		/>

		<Client
			name="W Produções"
			img="/sites/w-prod.png"
			job="Normalmente as noivas começam escolhendo o local para casar e é a partir da recomendação desse local que os outros profissionais de casamento são escolhidos. O porém é que as noivas já estão super conectadas e usam muito internet. A W Produções vai usar um mix de entender as noivas com uma presença na internet (através de redes sociais e anúncios no Google) para ser a primeira escolha da noiva."
			link="http://wproducoesdeeventos.com.br/"
		/>

		<Client
			name="Nacional"
			img="/sites/nacional.png"
			job="O primeiro site que construí foi o da Naciona em 2006. No site que está construído agora, além de ser uma versão digital e mobile do catálogo impresso, o site vai funcionar como uma ferramenta de divulgação dos novos lançamentos e dos eventos da qual a empresa participa."
			link="http://nacionalmoveis.com.br/"
		/>
	</Container>
)
