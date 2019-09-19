import React from "react"
import Header from "../components/header"
import Article from "../components/article"
import clientStyles from "./client.module.css"
import Button from "../components/button"
import Container from "../components/container"

const Client = props => (
	<div>
		<div className={clientStyles.client}>
			<h2 className={clientStyles.name}>{props.name}</h2>
			<img src={props.img} alt="" />
		</div>
		<Article>
			<p className={clientStyles.text}>{props.job}</p>
			<Button buttonLink={props.link} buttonText={props.text}/>
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
			job="Esse site foi criado para aumentar a quantidade de leads facilitando o contato através do site. O Benefi reescreveu os textos para engajar mais o leitor e também criamos uma agenda fácil de atualizar para manter os eventos do Eirene sempre em dia e mantê-lo como referência em terapia familiar sistêmica no país."
			link="http://eirene.com.br"
			text="Clique aqui para visitar o site"
		/>

		<Client
			name="W Produções"
			img="/sites/w-prod.png"
			job="Normalmente as noivas começam escolhendo o local para casar. A partir da recomendação do local que os outros profissionais de casamento são escolhidos. O porém é que as noivas já estão super conectadas e usam muito internet. A W Produções quer pular essa etapa tendo uma presença na web. A ideia é fazer com que a noiva contrate primeiro alguém para produzir o casamento e depois contrate o resto."
			link="http://wproducoesdeeventos.com.br/"
			text="Clique aqui para visitar o site"
		/>

		<Client
			name="Nacional"
			img="/sites/nacional.png"
			job="Os sites da Nacional até agora tem sido um mero espelho do catálogo impresso. Esse tem um espaço promocional para entrar em contato com lojistas e representantes e divulgar tudo que a Nacional está fazendo."
			link="http://nacionalmoveis.com.br/"
			text="Clique aqui para visitar o site"
		/>

		<Article>
			<h1 className="shine-blue">
			<h1>Vamos trabalhar juntos?</h1>
			<Button buttonLink="https://api.whatsapp.com/send?phone=5547999703819" buttonText="Me chama no WhatsApp!" />
			</h1>
		</Article>
	</Container>
)
