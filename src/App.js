import styled from "styled-components";
import "./App.css";
import Counter from "./features/counter/Counter";
import Avcado from "../src/assets/Avocado Hass.jpg";
import { Cart } from "./utils/cartItem";

// #1e633f ,black,white

function App() {
  return (
    <Container>
      <Header>
        <LeftHeader>
          <Logo>Reeco</Logo>
          <div>Store</div>
          <div>Orders</div>
          <div>Analytics</div>
        </LeftHeader>

        <RightHeader>
          <div>
            <i class="fa fa-shopping-cart"></i>
          </div>
          <div>Hello, James</div>
        </RightHeader>
      </Header>
      <OrderHeader>
        <Path>
          Orders &gt;{" "}
          <span style={{ textDecoration: "underline" }}>Order 32453ABC</span>
        </Path>
        <ApproveBar>
          <OrderId>Order 32454ABAC</OrderId>
          <ApproveBarBtn>
            <PrimaryButton>Back</PrimaryButton>
            <SecondaryButton>Approve Order</SecondaryButton>
          </ApproveBarBtn>
        </ApproveBar>
      </OrderHeader>
      <Main>
        <Head>
          {[
            {
              title: "Supplier",
              description: "East coast fruits & vegetables",
            },
            {
              title: "Shipping date",
              description: "Thu,Feb 10",
            },
            {
              title: "Total",
              description: "$15,028.3",
            },
            {
              title: "Category",
              description: (
                <span>
                  <i class="fa fa-drumstick-bite"></i>
                  <i class="fa fa-cheese"></i>
                  <i class="	fa fa-egg"></i>
                  <i class="fa fa-hamburger"></i>
                  <i class="	fa fa-hotdog"></i>
                  <i class="fa fa-pepper-hot"></i>
                </span>
              ),
            },
            {
              title: "Department",
              description: "300-444-678",
            },
            {
              title: "Status",
              description: "Awaiting your approvel ",
            },
          ].map((dt, i) => (
            <Card key={i}>
              <Title>{dt.title}</Title>
              <Description>{dt.description}</Description>
            </Card>
          ))}
        </Head>
        <Table>
          <SearchBar>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Search placeholder="Search..." />
              <i
                style={{ position: "absolute", right: "10px" }}
                class="fa fa-search"
              ></i>
            </div>

            <ButtonPair>
              <PrimaryButton>Add Item</PrimaryButton>
              <PrimaryButton>Print</PrimaryButton>
            </ButtonPair>
          </SearchBar>
          {[
            {
              src: false,
              name: "Product name",
              brand: "Brand",
              price: "Price",
              quantity: "Quantity",
              total: "Total",
              status: "Status",
            },
            ...Cart,
          ].map((ele, j) => (
            <Row key={j}>
              <Col flex={1}>
                {ele.src && (
                  <img src={Avcado} height={30} width={30} alt="avcado" />
                )}
              </Col>
              <Col flex={8}>{ele.name}</Col>
              <Col>{ele.brand}</Col>
              <Col>{ele.price}</Col>
              <Col>{ele.quantity}</Col>
              <Col>{ele.total}</Col>
              <Col>{ele.department}</Col>
              <ActionCol flex={6}>
                {ele.status ? (
                  ele.status
                ) : (
                  <>
                    <div>&#x2713;</div>
                    <div>&#x2717;</div>
                    <div>Edit</div>
                  </>
                )}
              </ActionCol>
            </Row>
          ))}
        </Table>
      </Main>
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1e633f;
  color: white;
  padding: 2rem;
`;

const LeftHeader = styled.div`
  margin-left: 5%;
  display: flex;
  align-items: center;
  column-gap: 3rem;
`;
const RightHeader = styled.div`
  margin-right: 5%;
  display: flex;
  align-items: center;
  column-gap: 3rem;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const OrderHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  margin-left: 5%;
  margin-right: 5%;
`;

const Path = styled.div`
  display: flex;
  margin: 1rem 0%;
`;

const ApproveBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ApproveBarBtn = styled.div`
  display: flex;
  column-gap: 2rem;
  justify-content: space-between;
`;

const OrderId = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;

const PrimaryButton = styled.button`
  border: 1px solid #1e633f;
  border-radius: 4rem;
  padding: 8px 16px;
  color: #1e633f;
`;
const SecondaryButton = styled.button`
  border: 1px solid #1e633f;
  border-radius: 4rem;
  padding: 8px 16px;
  background-color: #1e633f;
  color: white;
`;

const Main = styled.div`
  text-align: center;
  margin: 0% 5%;
  padding: 0 2rem;
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #cbc6c6;
  border-radius: 0.5rem;
`;
const Card = styled.div`
  width: 100%;
`;

const Table = styled.div`
  border: 1px solid #cbc6c6;
  border-radius: 0.5rem;
  margin: 1rem 0%;
  padding: 1rem 0%;
`;

const Search = styled.input`
  border: 1px solid #1e633f;
  border-radius: 4rem;
  padding: 8px 16px;
  width: 360px;
  color: #1e633f;
`;

const ButtonPair = styled.div`
  display: flex;
  column-gap: 1.4rem;
`;

const Title = styled.p`
  justify-content: space-between;
  color: grey;
`;
const Description = styled.p`
  font-size: 1.1rem;
  color: black;
  font-weight: bold;
`;

const SearchBar = styled.div`
  display: flex;
  margin: 0 5%;
  padding: 1rem 0;
  justify-content: space-between;
`;

const Col = styled.div`
  flex: ${(props) => props.flex || 3};
  text-align: left;
`;

const Button = styled.button`
  text-align: center;
`;
const ActionCol = styled.div`
  flex: ${(props) => props.flex || 3};
  display: flex;
  column-gap: 1rem;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem;
`;
