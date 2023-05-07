import useSWRMutation from "swr/mutation";
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { SelectInput } from "./SelectInput";
import { Loader2 } from "lucide-react";
import { delay } from "../lib/utils";

export function DialogAdd() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  async function createUser() {
    await delay(2000);
    const res = await fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 5,
        name,
        email,
        pictureUrl:
          "https://ph-files.imgix.net/c495260b-6e2b-4987-b44e-a669dce024c6.png?auto=format&fit=crop",
        role: "admin",
        isDeleted: false,
      }),
    });
    return res.json();
  }

  const { trigger, isMutating } = useSWRMutation(
    "http://localhost:3000/users",
    createUser
  );

  const handleSetName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await trigger();
    } catch (e) {
      console.error(e);
    } finally {
      setOpen(false);
      setName("");
      setEmail("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create a new user</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>
            Fill the fields to create a new user. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Full Name
              </Label>
              <Input
                onChange={handleSetName}
                id="name"
                value={name}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Email
              </Label>
              <Input
                onChange={handleSetEmail}
                id="email"
                value={email}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mb-20">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <SelectInput />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              {isMutating ? (
                <Loader2 className="h-8 w-8 animate-spin" />
              ) : (
                "Create"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
