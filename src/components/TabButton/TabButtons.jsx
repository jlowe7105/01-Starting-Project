export default function TabButtons({children, buttons, buttonsContainer = 'menu'}) {
    const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}     
        </>
    );
}