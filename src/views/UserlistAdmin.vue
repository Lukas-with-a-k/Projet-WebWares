<template>
  <div class="user-list">
    <h1>Liste des utilisateurs</h1>
    <table>
      <thead>
        <tr>
          <th>Raison Sociale</th>
          <th>Adresse</th>
          <th>Code Postal</th>
          <th>Ville</th>
          <th>Adresse Email</th>
          <th>Téléphone</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in accounts" :key="account.username">
          <td>{{ account.name }}</td>
          <td>{{ account.adress }}</td>
          <td>{{ account.postal }}</td>
          <td>{{ account.city }}</td>
          <td>{{ account.username }}</td>
          <td>{{ account.phone }}</td>
          <td>
            <select v-model="account.type" @change="updateAccount(account)">
              <option value="member">Membre</option>
              <option value="admin">Admin</option>
            </select>
          </td>
          <td>
            <button @click="removeAccount(account)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [],
    };
  },
  methods: {
    getAccountsFromLocalStorage() {
      const accounts = localStorage.getItem("accounts");
      return accounts ? JSON.parse(accounts) : [];
    },
    saveAccountsToLocalStorage(accounts) {
      localStorage.setItem("accounts", JSON.stringify(accounts));
    },
    updateAccount(account) {
      const accounts = this.getAccountsFromLocalStorage();
      const index = accounts.findIndex(
        (acc) => acc.username === account.username
      );
      if (index !== -1) {
        accounts[index].type = account.type;
        this.saveAccountsToLocalStorage(accounts);
      }
    },
    removeAccount(account) {
      if (
        confirm(
          `Êtes-vous sûr de vouloir supprimer le compte de ${account.name} ?`
        )
      ) {
        const accounts = this.getAccountsFromLocalStorage();
        const filteredAccounts = accounts.filter(
          (acc) => acc.username !== account.username
        );
        this.saveAccountsToLocalStorage(filteredAccounts);
        this.loadAccounts();
      }
    },
    loadAccounts() {
      this.accounts = this.getAccountsFromLocalStorage();
    },
  },
  mounted() {
    this.loadAccounts();
  },
};
</script>

<style scoped>
.user-list {
  padding-right: 250px;
  padding-left: 250px;
  height: 75vh;
  width: 70%;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
