// File: src/app/index.tsx
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>👋 Welcome to ZiiOZ Mobile</Text>

      <Link href="/ziipay">
        <Button title="Go to ZiiPay" />
      </Link>

      <View style={{ height: 10 }} />

      <Link href="/ziipay/settings">
        <Button title="Open Settings" />
      </Link>

      <View style={{ height: 10 }} />

      <Link href="/ziipay/status">
        <Button title="View Payment Status" />
      </Link>
    </View>
  );
}
