import { Image } from '@chakra-ui/image';
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/layout';
import Dish from '../../components/Dish/Dish';

export const Menu = () => {
  return (
    <Center margin="15px" w="100%">
      <VStack gap="20px">
        <Flex w="100%" gap="30px">
          <Box
            bgImage="url('https://www.sabornamesa.com.br/media/k2/items/cache/e8658cb4a1b6dba2ad4d07e8c6d174b9_XL.jpg')"
            bgPosition="center"
            bgSize="cover"
            h="380px"
            flex="1"
            borderRadius="lg"
          >
            <Box
              borderRadius="lg"
              boxSize="100%"
              bgGradient="linear(90deg, rgba(0,0,0,0.6867121848739496) 0%, rgba(0,0,0,0.5158438375350141) 49%, rgba(0,0,0,0) 100%)"
              justifyItems="bottom"
            >
              <Flex h="100%" alignItems="flex-end" padding="40px">
                <Box color="white">
                  <Heading color="white" as="h2" size="xl">
                    Frango Grelhado
                  </Heading>
                  <Heading as="h4" size="md">
                    Prato Principal 1
                  </Heading>
                  <Text fontSize="xs" mt="3px" noOfLines={3}></Text>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box bg="green.100" w="300px" borderRadius="lg" p="30px">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2738/2738730.png"
              boxSize="120px"
              marginBottom="30px"
            />
            <Flex h="50%" alignItems="flex-end">
              <Box>
                <Heading as="h2" size="xl">
                  Suco do dia:
                </Heading>
                <Heading as="h4" size="md">
                  Limão e Uva
                </Heading>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <HStack spacing="10px">
          <Dish
            title="Prato Principal 2"
            dish="Feijoada"
            description="Consiste num guisado de feijões-pretos com vários tipos de carne de porco e de boi"
            image="https://assets.unileversolutions.com/recipes-v2/54349.jpg"
          />
          <Dish
            title="Fast Grill"
            dish="Festival de Massas"
            description="Macarrão daquele jeitinho com molho branco, vermelho e algumas opções de carne para acompanhemento."
            image="https://soubh.uai.com.br/uploads/post/image/5883/main_211902_shutterstock_421827745.jpg"
          />
          <Dish
            title="Na Grelha"
            dish="Isca de Carne com Pimentões"
            image="https://www.rbsdirect.com.br/imagesrc/25399331.jpg?w=700"
            description="Prato feito com tiras finas de carne (geralmente bovina), salteadas em uma frigideira com pimentões picados e temperos, como alho e cebola."
          />
          <Dish
            title="Vegetariano"
            dish="Estrogonofe no grão de bico"
            image="https://receitanatureba.com/wp-content/uploads/2018/10/capa-18.jpg"
            description="Versão vegetariana do prato tradicional russo, feito com grão de bico em vez de carne, e um molho cremoso à base de creme de leite"
          />
          <Dish
            title="Guarnição"
            dish="Abobrinha Refogada / Arroz / Feijão Carioca"
            image="https://minhasaude.proteste.org.br/wp-content/uploads/2021/08/arroz-e-feij%C3%A3o.jpg"
          />
          <Dish
            title="Salada Crua"
            dish="Mix de Folhas com Frutas"
            image="https://i0.wp.com/panelaterapia.com/wp-content/uploads/2013/06/salada11.jpg?fit=640%2C437&ssl=1"
          />
          <Dish
            title="Salada Cozida"
            dish="Beterraba com Gergelim"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChq6QFxUwIOVgTvHprUyNPGFoj9916tDPkg&usqp=CAU"
          />
          {/* <Dish title="Sobremesa" dish="Melancia" image="" /> */}
        </HStack>
      </VStack>
    </Center>
  );
};
