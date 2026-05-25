import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import Oauth from "@/components/Oauth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = async () => {
    // Aquí iría la lógica para manejar el registro del usuario
    console.log("Formulario de registro:", form);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image
            source={images.signUpCar}
            style={{ width: "100%", height: 250 }}
            resizeMode="cover"
          />
          <Text className="font-Jakarta-SemiBold absolute bottom-5 left-5 text-2xl text-white">
            Bienvenido de nuevo
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Ingresa tu email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            secureTextEntry={true}
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Iniciar Sesión"
            onPress={onSignInPress}
            className="mt-6"
          />

          <Oauth />

          <Link
            href="/(auth)/sign-up"
            className="text-lg text-center text-general-200 mt-10 text-dark-500"
          >
            <Text>¿Aún no tienes una cuenta?</Text>
            <Text className="text-blue-500">Regístrate</Text>
          </Link>
        </View>

        {/* modal verificacion */}
      </View>
    </ScrollView>
  );
};

export default SignIn;
