// pages/sound.js
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchSounds } from "@/services/sound.service";
import { Sound as TypeSound } from "@/types/sound";

const Sound = ({ sounds }: { sounds: TypeSound[] }) => {
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nom</TableHead>
            <TableHead>Fichier</TableHead>
            <TableHead>Catégorie</TableHead>
            <TableHead className="text-right">Date d'ajout</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sounds.map((sound) => (
            <TableRow key={sound._id}>
              <TableCell className="font-medium">{sound._id}</TableCell>
              <TableCell>{sound.name}</TableCell>
              <TableCell>
                {sound.file ? (
                  <audio className="w-32" controls>
                    <source src={sound.file} type="audio/mp3" />
                  </audio>
                ) : (
                  "Aucun fichier"
                )}
              </TableCell>
              <TableCell>{sound.category}</TableCell>
              <TableCell className="text-right">
                {new Date(sound._createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export async function getStaticProps() {
  const sounds = await fetchSounds();

  return {
    props: {
      sounds,
    },
  };
}

export default Sound;
