import Imagem from "@/components/image"

export default function ProdutosCard({ item }, ...props) {
    return (
        <div id={props.id} className="cardProdutos">
            <section className="top">
                <div>
                    <h1>{item.name}</h1>
                    <span>{item.descript}</span>
                </div>
                <Imagem
                    src={item.image}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/semIMG.png';
                    }}
                />
            </section>
            <section className="price">
                <table>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            JSON.parse(item.prices) &&
                            JSON.parse(item.prices).map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.descri}</td>
                                        <td>{Number.parseFloat(value.price) ? value.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : value.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}