import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PairIdLabel } from 'forms'
import { useState, useEffect } from 'react'
 

export function FormList() {
  const [forms, setForms] = useState<PairIdLabel[]>([]);
 
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('http://localhost:8080/form/list')
      const data = await res.json()
      console.log(data.data);
      setForms(data.data)
    }
    fetchPosts()
  }, [])

  const loadForm = (id: string) => {
    console.log("Load form:", id)
  }

  if (!forms) return (<div>Loading...</div>)
 
  return (
  <Select onValueChange={loadForm}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Load a saved Form" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Saved Forms</SelectLabel>
          {(forms || []).map((form) => (
              <SelectItem key={form.id} value={form.id}>{form.label}</SelectItem>
          ))}
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}
