import { differenceInSeconds } from "date-fns";
import { CountDownContainer, Separator } from "./styles";
import { useEffect } from "react";

interface CountdownProps {
    activeCycle: any;
}

export function Countdown({activeCycle}: CountdownProps) {
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const totalSecond = activeCycle ? activeCycle.minutesAmount * 60 : 0;

    
    useEffect(() => {
        let interval: number;
        if(activeCycle){
            interval = setInterval(() => {
                const secondDifference = differenceInSeconds(new Date(), activeCycle.startDate)
                if(secondDifference >= totalSecond){
                    setCycles( state =>
                    state.map((cycle) => {
                        if (cycle.id === activeCycleId) {
                            return { ...cycle, finishedDate: new Date() }
                        } else {
                            return cycle
                        }
                    }),
                    )
                    setAmountSecondsPassed(totalSecond)
                    clearInterval(interval)
                } else {
                    setAmountSecondsPassed(secondDifference);
                }

            }, 1000)
        }

        return () => {
            clearInterval(interval)
        }
    }, [activeCycle, totalSecond, activeCycleId])

    return (
        <CountDownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>:</Separator>
            <span>{secords[0]}</span>
            <span>{secords[1]}</span>
        </CountDownContainer>
    )
}