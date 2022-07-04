import { Box, Flex, Grid } from "@chakra-ui/react";
import { MainText, Section } from "./Section";
import { SlideShow } from "./SlideShow";


export const Home = () => {

    return (
        <>
            <Box>
                <SlideShow />
            </Box>

            <Flex justifyContent={'center'} m={'90px auto 60px'} >
                <MainText title={'TOP SECTIONS'} />
            </Flex>

            <Grid maxW={'1200px'} p={'20px'} m={'auto'} gap={'30px'} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}>

                <Section
                    gender={'men'}
                    title={"Men's Products"}
                
                    img={"home/men.png"}
                />

                <Section
                    gender={'women'}
                    title={"Women's Products"}
                    
                    img={"home/women.png"}
                />

                <Section
                    gender={'kids'}
                    title={"Kid's Products"}
                  
                    img={"home/kids.png"}
                />

            </Grid>
        </>
    );
};

