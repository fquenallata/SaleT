import { icons } from "@/constants";
import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";

const Oauth = () => {
  const handleGoogleSignIn = async () => {
    console.log("Iniciando sesión con Google...");
    // Aquí iría la lógica para manejar la autenticación con Google
  };
  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text>O</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>

      <CustomButton
        title="Continuar con Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => <Image source={icons.google} />}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};
export default Oauth;
