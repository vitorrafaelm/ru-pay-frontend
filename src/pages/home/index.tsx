import { LoggedNavbar } from "@/components/loggedNavbar";

import { Container, Content, GridComponent } from "../../styles/pageStyles/home/styles";
import { SearchInput } from "@/components/searchInput";
import { UserCard } from "@/components/cardUser";

import ProfileImage from '../../assets/profile.png'; 
import { Box, Button, Modal, TextField } from "@mui/material";
import { useState } from "react";

export default function Home(): JSX.Element {

  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false); 

  function handleCloseModal(){
    setIsModalOpen(false); 
  }

  function handleOpenModal(){
    setIsModalOpen(true); 
  }

  const user = {
    name: 'John Doe',
    email: 'Ciências da Computação',
    avatar: ProfileImage.src,
    enrollment: '12345678985874'
  };

  console.log(isModalOpen); 

  return (
    <>
      <LoggedNavbar />

      <Container>
        <Content>
          <SearchInput />

          <GridComponent container spacing={2}>
            <GridComponent item md={4}>
              <UserCard
                name={user.name}
                course={user.email}
                avatar={user.avatar}
                enrollment={user.enrollment}
                openModal={handleOpenModal}
              />
            </GridComponent>

            <GridComponent item md={4}>
              <UserCard
                name={user.name}
                course={user.email}
                avatar={user.avatar}
                enrollment={user.enrollment}
                openModal={handleOpenModal}
              />
            </GridComponent>

            <GridComponent item md={4}>
              <UserCard
                name={user.name}
                course={user.email}
                avatar={user.avatar}
                enrollment={user.enrollment}
                openModal={handleOpenModal}
              />
            </GridComponent>

            <GridComponent item md={4}>
              <UserCard
                name={user.name}
                course={user.email}
                avatar={user.avatar}
                enrollment={user.enrollment}
                openModal={handleOpenModal}
              />
            </GridComponent>

            <GridComponent item md={4}>
              <UserCard
                name={user.name}
                course={user.email}
                avatar={user.avatar}
                enrollment={user.enrollment}
                openModal={handleOpenModal}
              />
            </GridComponent>

            <GridComponent item md={4}>
              <UserCard
                name={user.name}
                course={user.email}
                avatar={user.avatar}
                enrollment={user.enrollment}
                openModal={handleOpenModal}
              />
            </GridComponent>
          </GridComponent>
          
        </Content>
      </Container>


      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            flexDirection: 'column', 
            width: 500, 
            height: 500, 
            background: '#FFF', 
            borderRadius: 4, 
            padding: 32
          }}>
            <Box
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                width: '100%', 
                marginBottom: '2rem'
              }}
            >
              <span
                style={{
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: 25,
                }}  
              >Adicionar Pontos</span>
              <Button onClick={handleCloseModal} >Fechar</Button>
            </Box>

            <UserCard
                name={user.name}
                course={user.email}
                avatar={user.avatar}
                enrollment={user.enrollment}
                openModal={handleOpenModal}
                isCardOnModal={true}
              />

              <Box
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  width: '100%', 
                  marginTop: '2rem',
                }}
              >
                <TextField style={{ width: 200 }} variant="outlined" label="Quantidade de dinheiro" />
                <TextField style={{ width: 200 }} variant="outlined" label="Quantidade de créditos" />
              </Box>

              <Button
                style={{ 
                  marginTop: '2rem',
                  background: '#3776FF', 
                  color: '#FFF', 
                  fontWeight: 'bold'
                }}>Finalizar operação</Button>
        </Box>
      </Modal>
    </>
  );
}
