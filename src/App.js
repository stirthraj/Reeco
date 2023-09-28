import styled from "styled-components";
import "./App.css";
import Counter from "./features/counter/Counter";
import Avcado from "../src/assets/Avocado Hass.jpg";
import { Cart } from "./utils/cartItem";
import { useState } from "react";

// #1e633f ,black,white

function App() {
  const [edit, setEdit] = useState({
    visible: "hidden",
    opacity: 0,
    index: null,
    value: "",
  });
  const [item, setItem] = useState({
    visible: "hidden",
    opacity: 0,
    index: null,
    value: "",
  });
  const [state, setState] = useState([
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
  ]);
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
              <div>
                <i class="fa fa-print"></i>
              </div>
            </ButtonPair>
          </SearchBar>
          {state.map((ele, j) => (
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
              <ActionCol flex={6}>
                {ele.status ? (
                  ele.status
                ) : (
                  <>
                    {ele.statusText === "Approved" ? (
                      <SecondaryButton>{ele.statusText}</SecondaryButton>
                    ) : ele.statusText === "Missing" ||
                      ele.statusText === "Missing-Urgent" ? (
                      <DangerButton>{ele.statusText}</DangerButton>
                    ) : null}

                    <div
                      onClick={() => {
                        let deepCopy = JSON.parse(JSON.stringify(state));
                        deepCopy[j].statusText = "Approved";
                        setState([...deepCopy]);
                      }}
                    >
                      &#x2713;
                    </div>
                    <div
                      onClick={() => {
                        setEdit({
                          ...edit,
                          visible: "visible",
                          opacity: 1,
                          index: j,
                        });
                      }}
                    >
                      &#x2717;
                    </div>
                    <div
                      onClick={() => {
                        setItem({
                          ...item,
                          visible: "visible",
                          opacity: 1,
                          index: j,
                        });
                      }}
                    >
                      Edit
                    </div>
                  </>
                )}
              </ActionCol>
            </Row>
          ))}
        </Table>
      </Main>
      <PopupContainer visible={edit.visible} opacity={edit.opacity}>
        <Popup
          edit={edit}
          setEdit={setEdit}
          state={state}
          setState={setState}
        />
      </PopupContainer>
      <PopupContainer visible={item.visible} opacity={item.opacity}>
        <EditPopup
          item={item}
          setItem={setItem}
          state={state}
          setState={setState}
        />
      </PopupContainer>
    </Container>
  );
}

export default App;

export const EditPopup = ({ item, setItem, state, setState }) => (
  <div
    style={{
      textAlign: "center",
      color: "black",
      margin: "10% auto",
      padding: "20px",
      background: "#fff",
      borderRadius: "5px",
      width: "34%",
      position: "relative",
      transition: "all 5s ease-in-out",
    }}
  >
    <FlexBetween>
      <Bold>
        {state[item["index"]]?.name + "  " + state[item["index"]]?.brand}
      </Bold>
      <SecondaryButton onClick={() => setItem({ ...item, visible: "hidden", opacity: 0 })}>
        X
      </SecondaryButton>
    </FlexBetween>
    <div
      style={{
        display: "flex",
      }}
    >
      <Col flex={1}>
        <img src={Avcado} height={60} width={60} alt="avcado" />
      </Col>
      <Col flex={3}>
        <FlexBetween>
          <div>Price:</div>
          <div>{state[item["index"]]?.price}</div>
        </FlexBetween>
        <FlexBetween>
          <div>Quantity:</div>

          <div>
            <SecondaryButton
              onClick={() => {
                let deepCopy = JSON.parse(JSON.stringify(state));
                deepCopy[item["index"]].quantity =
                  deepCopy[item["index"]].quantity - 1;
                deepCopy[item["index"]].total =
                  deepCopy[item["index"]].quantity *
                  deepCopy[item["index"]].price;
                setState([...deepCopy]);
              }}
            >
              -
            </SecondaryButton>
            {state[item["index"]]?.quantity}
            <SecondaryButton
              onClick={() => {
                let deepCopy = JSON.parse(JSON.stringify(state));
                deepCopy[item["index"]].quantity =
                  deepCopy[item["index"]].quantity + 1;
                deepCopy[item["index"]].total =
                  deepCopy[item["index"]].quantity *
                  deepCopy[item["index"]].price;
                setState([...deepCopy]);
              }}
            >
              +
            </SecondaryButton>
          </div>
        </FlexBetween>
        <FlexBetween>
          <div>Total:</div>
          <div>{state[item["index"]]?.total}</div>
        </FlexBetween>
      </Col>
    </div>
    <FlexBetween>
      <Bold>
        Choose Reason: (Optional)
      </Bold>
      <div>
        {["Missing Product","Quantity is not same","Price is not same","Other"].map((el,k)=>{return state[item["index"]]?.reason===el?<SecondaryButton key={k}  onClick={() => {
                let deepCopy = JSON.parse(JSON.stringify(state));
                deepCopy[item["index"]].reason =el;
                setState([...deepCopy]);
              }}>{el}</SecondaryButton>:<PrimaryButton key={k}  onClick={() => {
                let deepCopy = JSON.parse(JSON.stringify(state));
                deepCopy[item["index"]].reason =el;
                setState([...deepCopy]);
              }}>{el}</PrimaryButton>})}
      </div>
    </FlexBetween>
    <FlexEnd>
      {/* <div
        onClick={() => {
        }}
      >
        Cancel
      </div> */}
      <SecondaryButton
     onClick={() => setItem({ ...item, visible: "hidden", opacity: 0 })}
      >
        Send
      </SecondaryButton>
    </FlexEnd>
  </div>
);
export const Popup = ({ edit, setEdit, state, setState }) => (
  <div
    style={{
      textAlign: "center",
      color: "black",
      margin: "30% auto",
      padding: "20px",
      background: "#fff",
      borderRadius: "5px",
      width: "30%",
      position: "relative",
      transition: "all 5s ease-in-out",
    }}
  >
    <FlexBetween>
      <Bold>Missing Product</Bold>
      <div onClick={() => setEdit({ ...edit, visible: "hidden", opacity: 0 })}>
        X
      </div>
    </FlexBetween>
    <div>Is {state[edit["index"]]?.name} urgent?</div>
    <FlexEnd>
      <div
        onClick={() => {
          let deepCopy = JSON.parse(JSON.stringify(state));
          deepCopy[edit["index"]].statusText = "Missing";
          setState([...deepCopy]);
          setEdit({ ...edit, visible: "hidden", opacity: 0 });
        }}
      >
        No
      </div>
      <div
        onClick={() => {
          let deepCopy = JSON.parse(JSON.stringify(state));
          deepCopy[edit["index"]].statusText = "Missing-Urgent";
          setState([...deepCopy]);
          setEdit({ ...edit, visible: "hidden", opacity: 0 });
        }}
      >
        Yes
      </div>
    </FlexEnd>
  </div>
);

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: ${(props) => props.visible || "hidden"};
  opacity: ${(props) => props.opacity || 0};
`;

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
  height: 36px;
  margin:4px 1px;
`;
const SecondaryButton = styled.button`
  border: 1px solid #1e633f;
  border-radius: 4rem;
  padding: 8px 16px;
  background-color: #1e633f;
  color: white;
  height: 36px;
  margin:0 0.4rem;
`;
const DangerButton = styled.button`
  border: 1px solid #1e633f;
  border-radius: 4rem;
  padding: 8px 16px;
  background-color: red;
  color: white;
  height: 36px;
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
  align-items: center;
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

const ActionCol = styled.div`
  flex: ${(props) => props.flex || 3};
  display: flex;
  justify-content: flex-end;
  column-gap: 1rem;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem;
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin:1rem 0;
`;

const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 1rem;
  font-weight: bold;
`;

const Bold = styled.div`
  font-weight: bold;
`;
