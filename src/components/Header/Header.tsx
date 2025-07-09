import { Cart, CoffeeIcon, HeaderContainer, Local, LocalAndCart, TittleArea } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
export function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
            <TittleArea>
                    <CoffeeIcon />

                    <div>

                        <h3>Coffee</h3>
                        <span>Delivery</span>

                    </div>
                
            </TittleArea>
            </Link>

            <LocalAndCart>
                        <Local>
                            <MapPin size={16} weight="fill" />
                            <span>Curitiba, PR</span>
                        </Local>

                        <Link to="/CheckOut">
                            <Cart>
                                <ShoppingCart size={20} weight="fill"  />
                            </Cart>
                        </Link>
                    
            </LocalAndCart>

           
        </HeaderContainer>
    )
}