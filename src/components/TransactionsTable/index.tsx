import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable()  {
    useEffect(() =>{
        api.get('/transactions')
        .then(response => console.log(response.data))
    },[]);



    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$10.000</td>
                        <td>Desenvolvimento</td>
                        <td>21/07/2021</td>
                    </tr>
                    <tr>
                        <td>Financiamento</td>
                        <td className="withdraw">R$ 500</td>
                        <td>Casa</td>
                        <td>10/07/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}

export default TransactionsTable









