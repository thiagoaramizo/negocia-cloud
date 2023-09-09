import { ProposesStatus } from "@/@types/ProposeType"

interface ProposeStatusBadgeProps {
  status?: ProposesStatus
}

export const ProposeStatusBadge = ( {status}: ProposeStatusBadgeProps) => {

  //@ts-ignorets-ignore
  const situationText = ( situation: typeof status.situation ) => {
    switch (situation ) {
      case 'sent': return 'Enviada'
      case "viewed": return 'Visualizada'
      case "accepted": return 'Aceita'
      case "completed": return 'Cumprida'
      case "expired": return 'Vencida'
      case "cancelled": return 'Cancelada'
      case "execution": return 'Execução'
      case "error": return 'Erro'
      default: return '-'
    }
  }

  const specialColor = status?.situation === 'expired' ? 'bg-red-200' : 'bg-slate-100'

  return (
    <>
      {status ? 
      <span className={`text-sm p-0.5 px-3 rounded-full flex items-center justify-center w-fit ${specialColor}`}>
        {situationText(status.situation)}
      </span> : <span>-</span>
      }
    </>
    
  )
}