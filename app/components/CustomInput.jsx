import { Input } from "antd";
import { ConfigProvider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const CustomInput = () => {
  return (
    <form action="" className="w-full flex items-center justify-center py-5">
      <ConfigProvider
        theme={{
          components: {
            Input: {
              activeBg: "#0F0D23",
              hoverBg: "#0F0D23",
              colorTextPlaceholder: "#A8B5DB",
              paddingBlock: "18px",
              activeBorderColor: "#D6C7FF",
            },
          },
        }}
      >
        <Input
          className=" w-full max-w-[600px] bg-darkBlue  text-colorPrimary text-lg border-none outline-none"
          placeholder="Find your favorite through thousand of films"
          //   addonBefore={<SearchOutlined className="" />}
          prefix={<SearchOutlined className="px-1 text-primary" />}
        />
      </ConfigProvider>
    </form>
  );
};

export default CustomInput;
