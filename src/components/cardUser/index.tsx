import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button
} from "@mui/material";

interface UserCardProps {
  name: string;
  enrollment: string;
  avatar: string;
  course: string;
  openModal: () => void; 
  isCardOnModal?: boolean;
}

export function UserCard(props: UserCardProps) {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: '1rem'
      }}
    >
      <CardHeader
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        avatar={<Avatar src={props.avatar} style={{ width: '4rem', height: '4rem' }} />}
      />
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: '0.5rem'
        }}
      >
        <Typography variant="body2" color="textSecondary" component="p">
          {props.name}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          Matrícula: {props.enrollment}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          Curso: {props.course}
        </Typography>
      </CardContent>

      {
        !props.isCardOnModal && (
          <Button onClick={props.openModal} >Adicionar créditos</Button>
        )
      }
    </Card>
  );
}
