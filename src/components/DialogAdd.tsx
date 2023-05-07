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

export function DialogAdd() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  // const mutation = useMutation({
  //   mutationFn: createUser,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["users"]);
  //     setOpen(false);
  //   },
  // });

  async function createUser() {
    const res = await fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 6,
        name,
        email,
        pictureUrl:
          "https://this-person-does-not-exist.com/img/avatar-11a44e0774085bf583cd986da16f1bd3.jpg",
        role: "admin",
        isDeleted: false,
      }),
    });
    return res.json();
  }

  const handleSetName = (event: any) => {
    setName(event.target.value);
  };

  const handleSetEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    // mutation.mutate();
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
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
