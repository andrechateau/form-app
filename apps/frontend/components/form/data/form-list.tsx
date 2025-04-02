import { loadConfig } from '@/app/server/form.service';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormBuilder } from '@/lib/form/form.metadata';
import { PairIdLabel } from 'forms'
import { useState, useEffect } from 'react'
 
export const FormList: React.FC<{ fb: FormBuilder }> = ({ fb }) => {
  const [forms, setForms] = useState<PairIdLabel[]>([]);
 
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('http://localhost:8080/form/list')
      const data = await res.json()
      setForms(data.data)
    }
    fetchPosts()
  }, [fb.id])

  const loadForm = async (id: string) => {
    const config = (await loadConfig(fb, id))
  }
  
  if (!forms) return (<div>Loading...</div>)
 
  return (
  <Select value={fb.name} onValueChange={loadForm}>
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
