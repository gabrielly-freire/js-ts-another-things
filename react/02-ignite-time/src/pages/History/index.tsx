import { HistoryContrainer, HistoryListContrainer, Status } from "./style";

export function History(){
    return (
        <HistoryContrainer>
            <h1>Meu histórico</h1>
           
           <HistoryListContrainer>
                <table>
                  <thead>
                    <th>Tarefa</th>
                    <th>Duração</th>
                    <th>Início</th>
                    <th>Status</th>
                  </thead> 

                  <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>há 2 mese</td>
                        <td><Status statusColor='green'>Concluido</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>há 2 mese</td>
                        <td><Status statusColor='green'>Concluido</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>há 2 mese</td>
                        <td><Status statusColor='yellow'>Em andamento</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>há 2 mese</td>
                        <td><Status statusColor='red'>Interrompido</Status></td>
                    </tr>
                  </tbody> 
                </table>
           </HistoryListContrainer>
        </HistoryContrainer>
    )
}