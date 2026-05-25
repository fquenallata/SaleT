import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

type Product = {
  id: string;
  name: string;
  price: number;
};

type CartItem = Product & {
  qty: number;
};

const PRODUCTS: Product[] = [
  { id: "1", name: "Remera", price: 5000 },
  { id: "2", name: "Pantalón", price: 12000 },
  { id: "3", name: "Buzo", price: 15000 },
  { id: "4", name: "Gorra", price: 3000 },
];

export default function Vender() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // 🟢 agregar producto al carrito (1 tap = suma)
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);

      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p,
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // 🔴 quitar producto
  const removeOne = (id: string) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0),
    );
  };

  // 💰 total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <View className="flex-1 bg-white p-4">
      {/* HEADER */}
      <Text className="text-2xl font-bold mb-3">Vender</Text>

      {/* 🟢 PRODUCTOS */}
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 10 }}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => addToCart(item)}
            className="flex-1 bg-gray-100 p-4 rounded-2xl"
          >
            <Text className="font-semibold">{item.name}</Text>
            <Text className="text-gray-600">${item.price}</Text>
          </Pressable>
        )}
      />

      {/* 🧾 CARRITO */}
      <View className="mt-4 p-4 bg-black rounded-2xl">
        <Text className="text-white text-lg font-bold mb-2">Carrito</Text>

        {cart.length === 0 ? (
          <Text className="text-gray-400">No hay productos</Text>
        ) : (
          cart.map((item) => (
            <View
              key={item.id}
              className="flex-row justify-between items-center mb-2"
            >
              <Text className="text-white">
                {item.name} x{item.qty}
              </Text>

              <View className="flex-row gap-2">
                <Pressable onPress={() => removeOne(item.id)}>
                  <Text className="text-red-400">-</Text>
                </Pressable>

                <Pressable onPress={() => addToCart(item)}>
                  <Text className="text-green-400">+</Text>
                </Pressable>
              </View>
            </View>
          ))
        )}

        {/* 💰 TOTAL */}
        <Text className="text-white font-bold mt-3">Total: ${total}</Text>

        {/* 🟢 BOTÓN TICKET */}
        <Pressable
          onPress={() => console.log("IMPRIMIR TICKET")}
          className="mt-3 bg-blue-500 p-3 rounded-xl"
        >
          <Text className="text-white text-center font-bold">
            Cobrar / Ticket
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
