import { HandPalm, Play } from "phosphor-react";
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles";
import { useEffect, useState } from "react";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";



// interface NewCycleFormData {
//     task: string,
//     minutesAmount: number
// }


interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    const currentSeconds = activeCycle ? totalSecond - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0')
    const secords = String(secondsAmount).padStart(2, '0')



    function handleCreateNewCycle(data: NewCycleFormData){
        const id = String(new Date().getTime());

        const newCycle: Cycle = {
            id: id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }

        setCycles((state) => [...state, newCycle]);
        setActiveCycleId(id)
        setAmountSecondsPassed(0)

        reset()
    }

    
     function handleInterruptCycle() {
        setCycles(state =>
        state.map((cycle) => {
            if (cycle.id === activeCycleId) {
            return { ...cycle, interruptedDate: new Date() }
            } else {
            return cycle
            }
        }),
        )
        setActiveCycleId(null)
  }

    
    useEffect(() => {
        if(activeCycle){
            document.title = `${minutes}:${secords}`
        }
    }, [minutes, secords, activeCycle])

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <NewCycleForm />
                <Countdown activeCycle={activeCycle}/>

                {
                    activeCycle ? (
                        <StopCountdownButton type="button" onClick={handleInterruptCycle}>
                            <HandPalm size={24} />
                            Interromper
                        </StopCountdownButton>
                    ) : (
                        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                            <Play size={24} />
                            Começar
                        </StartCountdownButton>
                    ) 
                }
            </form>
        </HomeContainer>
    )
}