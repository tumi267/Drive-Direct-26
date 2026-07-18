'use client'

import { useState } from "react"
import { Department } from "@prisma/client"

export default function useTransferTicket() {
  const [isOpen, setIsOpen] = useState(false)

  const [department, setDepartment] = useState<Department>("FINANCE")

  const [reason, setReason] = useState("")

  const [loading, setLoading] = useState(false)

  return {isOpen,setIsOpen,department,setDepartment,reason,setReason,loading,setLoading,}
}